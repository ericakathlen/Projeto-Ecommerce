class CreateItemCarrinhos < ActiveRecord::Migration[8.0]
  def change
    create_table :item_carrinhos do |t|
      t.integer :quantidade
      t.references :carrinho, null: false, foreign_key: true
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
