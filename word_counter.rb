##########################################################################################################
# File: word_counter.rb                                                                                   #
# Author: Germán Romarión                                                                                 #
# Date: 2016-03-16                                                                                        #
# Parameters: A text file                                                                                 #
# Description: Generates an array of JSon objects containing in the key 'word' the word, and 'frequency', #
#              the frequency of that word.                                                                #
###########################################################################################################
require 'json'

def clear_word(word)
  word = remove_special_characters(word)
  word.downcase
end

def remove_special_characters(word)
  special_characters = ['.', ',', '(', ')', '[', ']', '-', ':']

  special_characters.each do |special_character|
    word = word.gsub(special_character, '')
  end
  word
end

blacklisted_words = %w[of at the from in is for or and it to a are as an not can be use has which such on eg]
ans = {}

File.open(ARGV.shift).each do |line|
  line.split(' ').each do |word|
    word = clear_word(word)

    next if blacklisted_words.include?(word)
    if ans[word]
      ans[word] += 1
    else
      ans[word] = 1
    end
  end
end

target = File.open('ans.txt', 'w')

formatted_ans = ans.map do |k, v|
  { word: k, frequency: v }.to_json
end

target.write(formatted_ans.to_s.delete('\\').gsub('"{', '{').gsub('}"', '}'))
