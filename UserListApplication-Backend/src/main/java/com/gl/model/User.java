package com.gl.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

	private int id;
	private String name;
	private String email;
	private String phone;
	private Address address;

	@Data
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Address {
		private String street;
		private String city;
	}

}
