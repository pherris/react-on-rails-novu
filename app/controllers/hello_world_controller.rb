class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { full_name: "Stranger" }
  end
end
