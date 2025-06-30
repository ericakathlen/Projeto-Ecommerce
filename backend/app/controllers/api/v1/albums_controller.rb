module Api
  module V1
    class AlbumsController < ApplicationController
      before_action :authenticate_user!, except: [:index, :show, :search]

      def index
        albums = Album.all
        render json: albums.as_json(include: [:artist, :genero])
      end

      def show
        album = Album.find(params[:id])
        render json: album
      end

      def search
        query = params[:q]
        albums = Spotify::AlbumSearchService.new(query).call

        render json: albums.as_json(include: [:artist, :genero])
      end

    end
  end
end
