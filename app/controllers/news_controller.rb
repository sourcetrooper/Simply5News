class NewsController < ApplicationController
  before_action :set_news, only: [:show, :update, :destroy]
  # GET /News
  def index
   @News = News.all
   #render json: @News
  end
  # GET /News/1
  def show
   render json: @news
  end
  # POST /News
  def create
   @news = News.new(news_params)
   if @news.save
    render json: @news, status: :created, location:        api_v1_news_url(@news)
   else
    render json: @news.errors, status: :unprocessable_entity
   end
  end
  # PATCH/PUT /News/1
  def update
   if @news.update(news_params)
    render json: @news
   else
    render json: @news.errors, status: :unprocessable_entity
   end
  end
 # DELETE /News/1
  def destroy
   @news.destroy
  end
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_news
   @news = News.find(params[:id])
  end
  # Only allow a trusted parameter “white list” through.
  def news_params
    params.require(:news).permit(:author, :title, :description, :url, :urlToImage, :publishedAt, :string, :content)
  end
  end