module Spotify
    class AuthService
        include HTTParty
    
        def self.get_token
            client_id = ENV["SPOTIFY_CLIENT_ID"]
            client_secret = ENV["SPOTIFY_CLIENT_SECRET"]

            auth = Base64.strict_encode64("#{client_id}:#{client_secret}")

            response = post("https://accounts.spotify.com/api/token",
                headers: {
                    "Authorization" => "Basic #{auth}",
                    "Content-Type" => "application/x-www-form-urlencoded"
                },
                body: {
                    grant_type: "client_credentials"
                }
            )

            JSON.parse(response.body)
        end
    end
end



