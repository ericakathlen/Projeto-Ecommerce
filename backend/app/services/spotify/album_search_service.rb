module Spotify
    class AlbumSearchService
        
        def initialize(query)
            @query = query
            @spotify_service = Spotify::AlbumService.new
        end

        def call
            album = Album.find_by("nome ILIKE ?", "%#{@query}%")
            return [album] if album.present?

            album_data = @spotify_service.search_type(@query, "album")["albums"]["items"]

            created_albums = []

            album_data.first(3).each do |album_item|
                spotify_id = album_item["id"]
                album_nome = album_item["name"]
                url_capa = album_item["images"].first["url"] rescue nil
                data_lancamento = album_item["release_date"]
                
                artista_nome = album_item["artists"].first["name"] rescue nil
                artista_spotify_id = album_item["artists"].first["id"] rescue nil
                next if artista_nome.blank? || artista_spotify_id.blank?

                artist_data = @spotify_service.search_type(artista_nome,"artist")
                url_foto = artist_data.dig("artists","items",0,"images",0,"url")
                genero_nome = artist_data.dig("artists","items",0,"genres", 0)

                genero = if genero_nome.present?
                    Genero.find_or_create_by(nome: genero_nome)
                else
                    Genero.find_or_create_by(nome: "Desconhecido")
                end

                artist = Artist.find_by(spotify_id: artista_spotify_id)
                unless artist
                    artist = Artist.create!(
                        spotify_id: artista_spotify_id,
                        nome: artista_nome,
                        url_foto: url_foto
                    )
                end

                album = Album.create!(
                    spotify_id: spotify_id,
                    nome: album_nome,
                    url_capa: url_capa,
                    preco: rand(80..300),
                    estoque: rand(1..50),
                    data_lancamento: data_lancamento,
                    artist: artist,
                    genero: genero
                )

                created_albums << album
            end

            created_albums
        end
        
    end
end