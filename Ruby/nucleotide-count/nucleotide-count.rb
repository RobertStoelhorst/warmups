# Nucleotide Count
# DNA is represented by an alphabet of the following 
# symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for 
# the particular molecules that happen to make up a large part of DNA.

# Write a program in ruby that will tell you how many 
# times each nucleotide occurs in a string (i.e. how many 
# times 'A', 'C', 'G' and 'T' appear in a given string).

# It should also tell you if a character in the string 
# is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').

# Example:
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

# Source
# The Calculating DNA Nucleotides problem at Rosalind

require 'pry'

def count_nucleotides

    print "Enter string: "
    puts "{ Or press ctrl + C to exit } "
    user_input = gets.chomp.to_s

    count = {
        "A" => 0,
        "C" => 0,
        "G" => 0,
        "T" => 0,
        "Unknown" => 0
    }

    # case string.upcase.each_char
    # when "A"
    #     count["A"] += 1
    # when "C"
    #     count["C"] += 1
    # when "G"
    #     count["G"] += 1
    # when "T"
    #     count["T"] += 1
    # else 
    #     count["Unknown"] += 1
    # end

    user_input.upcase.each_char do |char|
        if count.key? char
            count[char] += 1
        else
          count["Unknown"] += 1
        end
    end
  
    count.each do |key, value|
        puts "#{key}: #{value}"
    end

    count_nucleotides

end

# print "Enter string: "

# user_input = gets.chomp
  
count_nucleotides