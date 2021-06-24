class CreateHours < ActiveRecord::Migration[6.0]
  def change
    create_table :hours do |t|
      t.string :day
      t.time :open_time
      t.time :close_time
      t.references :poi, null: false, foreign_key: true

      t.timestamps
    end
  end
end
