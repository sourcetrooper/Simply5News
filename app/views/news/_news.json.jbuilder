json.extract! news, :id, :author, :title, :description, :url, :urlToImage, :publishedAt, :string, :content, :created_at, :updated_at
json.url news_url(news, format: :json)
