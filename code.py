import qrcode

# Take input from the user
data = input("Enter the text or URL to generate QR code: ")

# Create QR code
qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(data)
qr.make(fit=True)

# Generate the image
img = qr.make_image(fill='black', back_color='white')

# Save the image
img.save(f"{data}.png")

print(f"QR code generated and saved as '{data}.png'")
