class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :favorite_character_id, :integer
  end
end
