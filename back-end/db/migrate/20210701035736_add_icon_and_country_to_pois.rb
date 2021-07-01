class AddIconAndCountryToPois < ActiveRecord::Migration[6.0]
  def change
    add_column :pois, :icon_url, :text
    add_column :pois, :country, :string
  end
end
