# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples
# 28 has 7 as a factor.
# In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors.
# In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor.
# Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

# My soloution

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


def raindrops
    print "pick a number "
    puts "{ Or press ctrl + C to exit } "
    game = gets.chomp.to_i


        if game % 3 == 0 && game % 5 == 0 
            puts "PlingPlang"
        elsif game % 3 == 0 
            puts "PLING"
        elsif game % 5 == 0 
            puts "PLANG"
        elsif game % 7 == 0 
            puts "PLONG"
        else 
            print game.to_s
            puts " Is just another raindrop" 
            
        end
        sleep(2)
    puts ""
    puts raindrops
end

puts raindrops


   # Camillas solution soloution

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

# def raindrops number
# 	raindrop_str = ''
# 	raindrop_str += 'Pling' if number % 3 == 0
# 	raindrop_str += 'Plang' if number % 5 == 0
# 	raindrop_str += 'Plong' if number % 7 == 0

# 	if raindrop_str.size == 0
# 		raindrop_str = number.to_s
#     end 
        
#     raindrop_str
# end


# puts raindrops 28            # Plong
# puts raindrops 1755          # PlingPlang
# puts raindrops 34            # 34
# puts raindrops 105           # PlingPlangPlong