module Admin
  class AlbumsController < ApplicationController
    before_action :authenticate_user!
    before_action :authorize_admin!

    def index
      albums = Album.all
      render json: albums
    end

    def create
      album = Album.new(album_params)
      if album.save
        render json: album
      else
        render json: { errors: album.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      album = Album.find(params[:id])
      if album.update(album_params)
        render json: album
      else
        render json: { errors: album.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def destroy
      album = Album.find(params[:id])
      album.destroy
      head :no_content
    end

    private

    def album_params
      params.require(:album).permit(:spotify_id ,:nome, :url_capa, :preco, :estoque, :data_lancamento, :artista_id, :genero_id)
    end

    def authorize_admin!
      render json: { error: "Acesso não autorizado" }, status: :unauthorized unless current_user.admin?
    end

  end
end