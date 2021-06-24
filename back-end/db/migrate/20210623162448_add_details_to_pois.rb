class AddDetailsToPois < ActiveRecord::Migration[6.0]
  def change
    add_column :pois, :notes, :text
    add_column :pois, :street, :string
    add_column :pois, :city, :string
    add_column :pois, :state, :string
    add_column :pois, :zip, :float
  end
end
