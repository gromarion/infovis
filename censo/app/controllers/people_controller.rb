class PeopleController < ApplicationController

  def index
    @people = Person.first(100)
  end

  def men_and_women
    @people = Person.all
    total = @people.count
    men = @people.where(p02: 1).count
    women = total - men
    @men_and_women = {
      men: { amount: men, percentage: (men.to_f / total).round(4) },
      women: { amount: women, percentage: (women.to_f / total).round(4) },
      total: total
    }

    render json: @men_and_women
  end

  def alphabet_people
    @people = Person.all
    total = @people.count
    alphabets = @people.where(p07: 1).count
    analphabets = @people.where(p07: 2).count
    not_applicable = total - alphabets - analphabets
    @men_and_women = {
      alphabets: { amount: alphabets, percentage: (alphabets.to_f / total).round(4) },
      analphabets: { amount: analphabets, percentage: (analphabets.to_f / total).round(4) },
      not_applicable: { amount: not_applicable, percentage: (not_applicable.to_f / total).round(4) },
      total: total
    }

    render json: @men_and_women
  end
end
