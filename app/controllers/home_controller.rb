class HomeController < ApplicationController

  def landing
    @posts = Post.all
  end

end
