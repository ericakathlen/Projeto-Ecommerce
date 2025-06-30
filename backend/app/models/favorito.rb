class Favorito < ApplicationRecord
  belongs_to :user
  belongs_to :album

  validates :user, presence: true
  validates :album, presence:true
end
