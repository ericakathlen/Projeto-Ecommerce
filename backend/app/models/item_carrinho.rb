class ItemCarrinho < ApplicationRecord
  belongs_to :carrinho
  belongs_to :album

  validates :carrinho, presence: true
  validates :album, presence: true
end
