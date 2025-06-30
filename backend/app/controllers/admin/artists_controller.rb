module Admin
  class ArtistsController < ApplicationController
    before_action :authenticate_user!
    before_action :authorize_admin!

    def index
      render json: Artist.all
    end

    def create
      artist = Artist.new(artist_params)
      if artist.save
        render json: artist
      else
        render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      artist = Artist.find(params[:id])
      if artist.update(artist_params)
        render json: artist
      else
        render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def destroy
      artist = Artist.find(params[:id])
      artist.destroy
      head :no_content
    end

    private

    def artist_params
      params.require(:artist).permit(:spotify_id ,:nome, :url_foto)
    end

    def authorize_admin!
      render json: { error: "Acesso não autorizado" }, status: :unauthorized unless current_user.admin?
    end

  end
end