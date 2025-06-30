module Api
    module V1
        class CarrinhoController < ApplicationController
            before_action :authenticate_user!

            def show
                carrinho = current_user.carrinhos.last
                itens_carrinho = carrinho&.item_carrinhos || []
                render json: { carrinho: carrinho, itens: itens_carrinho }
            end

        end
    end
end

'''class Api::V1::CarrinhoController < ApplicationController
    before_action :authenticate_user!

    def show
        @carrinho = current_user.carrinhos.last
        @itens_carrinho = @carrinho.item_carrinhos if @carrinho.present?
    end


end'''
