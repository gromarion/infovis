class PeopleController < ApplicationController

  def index
    @people = Person.first(100)
  end
end
