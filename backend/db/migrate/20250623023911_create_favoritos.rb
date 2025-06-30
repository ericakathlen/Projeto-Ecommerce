class CreateFavoritos < ActiveRecord::Migration[8.0]
  def change
    create_table :favoritos do |t|
      t.references :user, null: false, foreign_key: true
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
