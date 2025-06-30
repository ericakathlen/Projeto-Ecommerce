class Artist < ApplicationRecord
  has_many :albums

  validates :spotify_id, presence:true, uniqueness: true
  validates :nome, presence: true
end
