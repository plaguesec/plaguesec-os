import system
import osproc
import strutils
import strformat

proc help_main_menu() =
    echo """
1. Build ISO    : Show live-build-config
    """

proc clear() = 
    let clear_screen = execCmd "clear"

proc build_iso() = 
    echo """
Variants:
    xfce
    kde
    bugbounty
    everything
    """
    echo "Pick a Variant: "
    let variant : string = readLine(stdin)
    echo fmt"Building the PlagueSecurity-{variant}"
    let final_variant = toLowerAscii(variant)
    var 
        build_iso_query = execCmd fmt"sudo ./build.sh --variant {final_variant} -v"
        
help_main_menu()
echo "What Number: "
let build = readLine(stdin)

if build == "1":
    build_iso()
else:
    echo "Please Enter the Options Above"
    clear()
    help_main_menu()

