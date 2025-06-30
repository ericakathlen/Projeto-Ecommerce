class Genero < ApplicationRecord
    has_many :albums

    validates :nome, presence: true
end
