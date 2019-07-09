class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :author
      t.string :title
      t.string :description
      t.string :url
      t.string :urlToImage
      t.string :publishedAt
      t.string :string
      t.string :content

      t.timestamps
    end
  end
end
