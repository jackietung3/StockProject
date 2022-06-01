class AddStockToWatchLists < ActiveRecord::Migration[6.1]
  def change
    add_column :watch_lists, :stocks, :string, array: true, default: []
  end
end
