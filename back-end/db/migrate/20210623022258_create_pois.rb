class CreatePois < ActiveRecord::Migration[6.0]
  def change
    create_table :pois do |t|
      t.string :name
      t.string :category
      t.integer :votes
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
