class Carrinho < ApplicationRecord
  belongs_to :user
  has_many :item_carrinhos

  validates :user, presence: true
end
