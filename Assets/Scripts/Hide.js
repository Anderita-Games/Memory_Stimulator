#pragma strict

function Start () {

}

function Update () {
	if (PlayerPrefs.GetInt("hide") == 1) {
		GetComponent.<Renderer>().enabled = false;
	}else if (PlayerPrefs.GetInt("hide") == 0) {
		GetComponent.<Renderer>().enabled = true;
	}
}