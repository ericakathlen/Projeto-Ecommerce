module Api
  module V1
    class ArtistsController < ApplicationController
      before_action :authenticate_user!, except: [:index, :show]

      def index
        artists = Artist.all
        render json: artists
      end

      def show
        artist = Artist.find(params[:id])
        render json: artist
      end

    end
  end
end