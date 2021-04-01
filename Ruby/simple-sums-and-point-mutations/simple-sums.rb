require 'pry'

# Simple Sums - Ruby
# Write a program that can calculate the sum of the first n elements of the following sequences:

# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

# For example:
# s1(4) = 0

# s2(4) = 10

# Can you guess what the sum would be if n is infinity?

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

# s1 = 10 - 9 - 8 - 7 - 6 - 5  
# s2 = 1 + 2 + 3 + 4 + 5 + 6 

# def s1 num
#     num % 2
# end

# def s2 num
#     (1..num).sum
# end

# puts s1 4
# puts s2 4

# .. = beginning to end inclusively
# ... = beginning to end excluding end value

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

# Point Mutations
# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.

# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.

# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.

# This is called the 'Hamming distance'

# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# The Hamming distance between these two DNA strands is 7.

# Write a program that can calculate the Hamming difference between two DNA strands.

# Source
# The Calculating Point Mutations problem at Rosalind

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

def point_mutations (string_one, string_two)

    hamming_distance = 0

    string_one.chars.each_with_index do | base, index |

        if base != string_two[index]
            hamming_distance +=1
        end

    end

    hamming_distance

end

puts point_mutations "GAGCCTACTAACGGGA", "CATCGTAATGACGGCCT"


binding.pry