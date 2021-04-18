class CreateFavoritesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :character_id, null: false

      t.timestamps
    end
    add_index :favorites, :user_id
    add_index :favorites, :character_id
    remove_column :users, :favorite_character_id, :integer
  end
end
