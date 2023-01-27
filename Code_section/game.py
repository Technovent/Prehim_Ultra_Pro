import math, random, sys
import pygame
from pygame.locals import *
import time

# exit the program
def events():
	for event in pygame.event.get():
		if event.type == QUIT or (event.type == KEYDOWN and event.key == K_ESCAPE):
			pygame.quit()
			sys.exit()

# define display surface			
W, H = 1000,650
HW, HH = W / 2, H / 2
AREA = W * H

# initialise display
pygame.init()
CLOCK = pygame.time.Clock()
DS = pygame.display.set_mode((W, H))
pygame.display.set_caption("Surviving In Economic transition era")
FPS = 500

# define some colors
BLACK = (0, 0, 0, 255)
WHITE = (255, 255, 255, 255)

bg = pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/12704376_5044039.jpg").convert()
bgWidth, bgHeight = bg.get_rect().size

stageWidth = bgWidth * 2
stagePosX = 0

startScrollingPosX = HW

circleRadius = 10
circlePosX = circleRadius
playerImg=pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/abuse.png").convert()
playerPosX = circleRadius
playerPosY = 385
playerVelocityX = 0

font=pygame.font.SysFont(None,25)
def message(msg,color):
    screen_text=font.render(msg,True,color)
    DS.blit(screen_text, [int(W/10),int(H/15)])
    

def player(playerPosX,playerPosY):
    playerVelocityX = 0
    DS.blit(playerImg, (playerPosX,playerPosY))

# main loop
while True:
	events()

	k = pygame.key.get_pressed()
	
	if k[K_RIGHT]:
		playerVelocityX = 1
	elif k[K_LEFT]:
		playerVelocityX = -1
	else:
		playerVelocityX = 0
		
	playerPosX += playerVelocityX
	if playerPosX > stageWidth - circleRadius: playerPosX = stageWidth - circleRadius
	if playerPosX < circleRadius: playerPosX = circleRadius
	if playerPosX < startScrollingPosX: circlePosX = playerPosX
	elif playerPosX > stageWidth - startScrollingPosX: circlePosX = playerPosX - stageWidth + W
	else:
		circlePosX = startScrollingPosX
		stagePosX += -playerVelocityX
	
	rel_x = stagePosX % bgWidth
	DS.blit(bg, (rel_x - bgWidth, 0))
	if rel_x < W:
		DS.blit(bg, (rel_x, 0))
    
	stagePosX-=1
	DS.blit(playerImg, (int(circlePosX), int(playerPosY) - 25))
	
	if k[K_CAPSLOCK]:
		p=message("Let the journey begin,press A", BLACK) 
       
    #level-2
	if k[K_a]:
		exp=pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/12704376_5044039.jpg").convert()
		bg=exp
		#z=message("new mars for press b", BLACK)
		#p=z       
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("Is that the best option to invest money in bank always? ...Yes for press:B  No for press:C ", BLACK) 		
		pygame.display.update()  
    #level-3               
	if k[K_b]:
		exp=pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/12704376_5044039.jpg").convert()
		bg=exp   
		message("Then where you want to invest?Share Market or mutual fund Press:C for YES OR Press:b for NO", BLACK)    
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		 
		
		pygame.display.update()	
  	#level-4
	if k[K_c]:
		exp=pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/12704376_5044039.jpg").convert()
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(1000)
		message("is it good randmoly invest or be an expert then invest ? Press d for yes e for no",BLACK)
		pygame.display.update()    
	if k[K_d]:
		exp=pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/12704376_5044039.jpg").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message(" you are doing great! ...",BLACK)
		pygame.display.update()   
	if k[K_e]:
		exp=pygame.image.load("C:\Users\Arafat\Downloads\Invest-20230127T051352Z-001\Invest\IMG_5840.JPG").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("Oh you are doing some bad decision and get a loss...To do better press",BLACK)
		pygame.display.update()   

	if k[K_f]:
		exp=pygame.image.load("/Users/Arafat/Downloads/Invest-20230127T051352Z-001/Invest/12704376_5044039.jpg").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("want to learn some tutorial ? YES for Press:G or No Press:C",BLACK)
		pygame.display.update() 
	if k[K_g]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/build.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("Here is some facts you have to understand? Press: H for Yes Pres:5 for No ",BLACK)
		pygame.display.update()  
	if k[K_h]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/science.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("There are many kinds of investment in company and mutual unding. ? Press: I for village and Press: L for city",BLACK)
		pygame.display.update()  
	if k[K_i]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/village.jpg").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("________________? Press:J for yes Press:5 for NO",BLACK)
		pygame.display.update()  
	if k[K_j]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/sciagri.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("_________________________? Press:K for yes Press:5 for NO(3sec) ",BLACK)
		pygame.display.update()   
	if k[K_k]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/food.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("___________________________________y? Yes:M or No:C ",BLACK)
		pygame.display.update()     
	if k[K_l]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/city.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("___________________________? press:M for yes or Press:5 for NO",BLACK)
		pygame.display.update()   
	if k[K_m]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/factory.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message(" _______________________________________?  ...Press:N for new life and Press:O for modern(3sec)",BLACK)
		pygame.display.update() 
	if k[K_n]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/level-6.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("Shortage Food...For food Press:J or Press:O  ",WHITE)
		pygame.display.update() 
	if k[K_o]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/air.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("_______________________________R for plan tree",WHITE)
		pygame.display.update()
	if k[K_p]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/industry.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("_____________________________________S for clean beach and water",WHITE)
		pygame.display.update()      
	if k[K_r]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/plant.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("________________________________________",WHITE)
		pygame.display.update()    
	if k[K_s]:
		exp=pygame.image.load("__________________________________").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("A new beach...Press:U",WHITE)
		pygame.display.update() 
	if k[K_t]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/nicebeach.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("_______________________________",WHITE)
		pygame.display.update()
	if k[K_u]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/nicebeach.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("__ ",WHITE)
		pygame.display.update()  
	if k[K_v]:
		exp=pygame.image.load("/Users/Arafat/Desktop\himel/hellow world.cpp/himel.py/nasa game/img/storm.png").convert()   
		bg=exp
		DS.blit(bg, (rel_x,0))			   
		pygame.time.wait(10)
		message("_________",WHITE)
		pygame.display.update()  
	
  

                                          
        				        		        
	pygame.display.update()
 
	CLOCK.tick(FPS)
	DS.fill(BLACK)
