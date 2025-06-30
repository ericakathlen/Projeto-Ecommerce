module Api
  module V1
    class ItemCarrinhoController < ApplicationController
      before_action :authenticate_user!

      def create
        album = Album.find(params[:album_id])
        quantidade = params[:quantidade].to_i


        carrinho = current_user.carrinhos.last || current_user.carrinhos.create

      
        item_existente = carrinho.item_carrinhos.find_by(album_id: album.id)

        if item_existente
          nova_quantidade = item_existente.quantidade + quantidade

      
          if album.estoque >= quantidade
            item_existente.update(quantidade: nova_quantidade)
            album.update(estoque: album.estoque - quantidade)
          else
            flash[:alert] = "Estoque insuficiente!"
          end
          
        else
          if album.estoque >= quantidade
            carrinho.item_carrinhos.create(album: album, quantidade: quantidade)
            album.update(estoque: album.estoque - quantidade)
          else
            flash[:alert] = "Estoque insuficiente!"
          end
        end

  
      end

      def update
      end

      def destroy
      end
      
    end
  end
end


