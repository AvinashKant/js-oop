# This function will be tested automatically.
# Do not change the function name or parameters.
def scan_parcels(parcel_codes: list[str]) -> list[str]:
    # Write your code below this line
    logs = []
    for code in parcel_codes:
        if code == "DAMAGED":
            logs.append("Skipped damaged parcel")
            continue
        if code == "STOP":
            logs.append("Critical error: Stopping scan")
            break
        logs.append(f"Scanned parcel: {code}")
    else:
        logs.append("All parcels scanned successfully")
    return logs