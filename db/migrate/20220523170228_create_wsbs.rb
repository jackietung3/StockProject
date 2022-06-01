class CreateWsbs < ActiveRecord::Migration[6.1]
  def change
    create_table :wsbs do |t|
      t.string :username
      t.string :post
      t.string :title

      t.timestamps
    end
  end
end
