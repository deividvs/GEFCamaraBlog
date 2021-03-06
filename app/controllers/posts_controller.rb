class PostsController < ApplicationController

  def index
    @posts = Post.all.paginate(:page => params[:page], :per_page => 10).order('created_at DESC')
  end

  def show
    @post = Post.friendly.find(params[:id])
    @posts = Post.order("created_at desc").limit(4).offset(1)
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :image, :category)
  end

end
