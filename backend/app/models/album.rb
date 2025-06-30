class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :genero
  has_many :item_carrinhos
  has_many :favoritos
  has_many :users, through: :favoritos, source: :user

  validates :spotify_id, presence: true, uniqueness:true
  validates :nome, presence: true
  validates :preco, presence: true
  validates :estoque, presence:true
  validates :artist, presence:true
  validates :genero, presence:true

end
