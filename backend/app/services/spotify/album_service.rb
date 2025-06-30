module Spotify
  class AlbumService
    include HTTParty
    BASE_URL = "https://api.spotify.com/v1/"

    def initialize
      check_token
    end

    def check_token
      if @token.nil? || @expires_at.nil? || (Time.now >= @expires_at) 
        new_token
      end
    end

    def new_token
      token_data = Spotify::AuthService.get_token

      if token_data && token_data["access_token"] && token_data["expires_in"]
        @token = token_data
        @expires_at = Time.now + token_data["expires_in"].to_i
      else
        raise "Error obtain Token"
      end
    end

    def several_albums(ids_albums)
      check_token
      response = self.class.get("#{BASE_URL}albums?ids=#{ids_albums.join(",")}", headers: { "Authorization" => "Bearer #{@token["access_token"]}"})

      JSON.parse(response.body)
    end

    def get_album(album_id)
      check_token
      response = self.class.get("#{BASE_URL}albums/#{album_id}", headers: { "Authorization" => "Bearer #{@token["access_token"]}"})

      JSON.parse(response.body)
    end

    def search_type(query, type)
      check_token
      response = self.class.get("#{BASE_URL}search?q=#{query}&type=#{type}", headers: {"Authorization" => "Bearer #{@token["access_token"]}"})

      JSON.parse(response.body)
    end
    
  end
end 
