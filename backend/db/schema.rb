ActiveRecord::Schema[8.0].define(version: 2025_06_24_170922) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "spotify_id", null: false
    t.string "nome", null: false
    t.string "url_capa"
    t.decimal "preco", null: false
    t.integer "estoque", null: false
    t.date "data_lancamento"
    t.bigint "artist_id", null: false
    t.bigint "genero_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
    t.index ["genero_id"], name: "index_albums_on_genero_id"
    t.index ["spotify_id"], name: "index_albums_on_spotify_id", unique: true
  end

  create_table "artists", force: :cascade do |t|
    t.string "spotify_id", null: false
    t.string "nome", null: false
    t.string "url_foto"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spotify_id"], name: "index_artists_on_spotify_id", unique: true
  end

  create_table "carrinhos", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_carrinhos_on_user_id"
  end

  create_table "favoritos", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_favoritos_on_album_id"
    t.index ["user_id"], name: "index_favoritos_on_user_id"
  end

  create_table "generos", force: :cascade do |t|
    t.string "nome", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "item_carrinhos", force: :cascade do |t|
    t.integer "quantidade"
    t.bigint "carrinho_id", null: false
    t.bigint "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_item_carrinhos_on_album_id"
    t.index ["carrinho_id"], name: "index_item_carrinhos_on_carrinho_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "albums", "artists"
  add_foreign_key "albums", "generos"
  add_foreign_key "carrinhos", "users"
  add_foreign_key "favoritos", "albums"
  add_foreign_key "favoritos", "users"
  add_foreign_key "item_carrinhos", "albums"
  add_foreign_key "item_carrinhos", "carrinhos"
end
