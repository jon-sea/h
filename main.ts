let bg = image.create(screen.width, screen.height)
scene.setBackgroundImage(bg)
// Any manipulations now done to bg will be shown on
// the screen
bg.printCenter('Hi, there!', 0, 5, image.font8)
bg.drawRect(0, 20, 40, 40, 1)
bg.fillRect(0, 70, 30, 30, 5)
bg.drawLine(0, 0, 100, 100, 1)
