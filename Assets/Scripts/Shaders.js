#pragma strict

function Start () {
	PlayerPrefs.SetInt("Endpoint", 0);
	Time.timeScale = PlayerPrefs.GetInt("paused");
}

function OnCollisionStay(col : Collision) {
	
	if (gameObject.name == "Endpoint") {
			PlayerPrefs.SetInt(gameObject.name, 1);
	}
}	