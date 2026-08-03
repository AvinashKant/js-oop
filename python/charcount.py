# input: nnaabcgdddllll
# output: 2n2a1b1c1g3d4l

str = input("enter your string = ")

def compress_string(text):
    if not text:
        return ""

    result = []
    count = 1

    for i in range(1, len(text)):
        if text[i] == text[i - 1]:
            count += 1
        else:
            result.append(f"{count}{text[i-1]}")
            count = 1

    result.append(f"{count}{text[-1]}")
    return "".join(result)


print(compress_string(str))
