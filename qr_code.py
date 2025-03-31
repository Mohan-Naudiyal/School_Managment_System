import cv2
import csv
from datetime import datetime

cap = cv2.VideoCapture(0)
# initialize the cv2 QRCode detector
detector = cv2.QRCodeDetector()

# Open CSV file in append mode and write header if it's a new file
with open('attendance.csv', 'a', newline='') as file:
    writer = csv.writer(file)
    # Write header if the file is empty
    if file.tell() == 0:
        writer.writerow(["Timestamp", "QR Code Data"])

    while True:
        _, img = cap.read()
        # detect and decode
        data, bbox, _ = detector.detectAndDecode(img)

        # check if there is a QRCode in the image
        if data:
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            writer.writerow([timestamp, data])
            print(f"Data '{data}' recorded at {timestamp}")
            break

        cv2.imshow("QRCODE Scanner", img)
        if cv2.waitKey(1) == ord("q"):
            break

cap.release()
cv2.destroyAllWindows()

print("QR code data successfully saved to 'attendance.csv'")
