import httpclient
import osproc
import strformat

var request = newHttpClient()

proc writeFile(content : string) = 
    var
        update_file = open("/tmp/plaguesec-update.sh", fmWrite)
    update_file.write(fmt"""
{content}

""")
    defer: update_file.close()

proc run_update() = 
    echo "Running Update"
    var response = request.getContent("")
    writeFile(response)
    let query = execCmd "chmod +x /tmp/plaguesec-update.sh && sed -i 's/\r$//' /tmp/plaguesec-update.sh && sudo bash /tmp/plaguesec-update.sh && sudo rm /tmp/plaguesec-update.sh"

run_update()
