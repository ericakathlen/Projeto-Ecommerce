class User < ApplicationRecord
  has_many :carrinhos
  has_many :favoritos
  has_many :albums, through: :favoritos, source: :album

  validates :email, presence:true, uniqueness: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
