module Api
  module V1
    class FavoritoController < ApplicationController
      before_action :authenticate_user!

      def index
        render json: current_user.albums
      end

      def create
        album = Album.find(params[:album_id])
        unless current_user.albums.include?(album)
          current_user.favoritos.create(album: album)
        end
        head :ok
      end

      def destroy
        favorito = current_user.favoritos.find_by(album_id: params[:album_id])
        favorito&.destroy
        head :no_content
      end

    end
  end
end