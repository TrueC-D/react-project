class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.datetime :start_visit
      t.datetime :end_visit

      t.timestamps
    end
  end
end
