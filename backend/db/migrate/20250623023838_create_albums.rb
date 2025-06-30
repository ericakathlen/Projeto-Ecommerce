class CreateAlbums < ActiveRecord::Migration[8.0]
  def change
    create_table :albums do |t|
      t.string :spotify_id, null: false
      t.string :nome, null: false
      t.string :url_capa
      t.decimal :preco, null: false
      t.integer :estoque, null: false
      t.date :data_lancamento
      t.references :artist, null: false, foreign_key: true
      t.references :genero, null: false, foreign_key: true

      t.timestamps
    end
    
    add_index :albums, :spotify_id, unique:true
  end
end
