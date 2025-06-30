class CreateArtists < ActiveRecord::Migration[8.0]
  def change
    create_table :artists do |t|
      t.string :spotify_id, null: false
      t.string :nome, null: false
      t.string :url_foto

      t.timestamps
    end
    
    add_index :artists, :spotify_id, unique: true
  end
end
